/**
* Populate user "friends" with friends info
*/

package main

import (
	"errors"
	"fmt"
	"testing"
	"time"

	"github.com/google/go-cmp/cmp"
)

type DBResult struct {
	Person *DBPerson
	Err error
}

type DBPerson struct {
	ID      int
	Name    string
	Friends []int
}

type PopulatedPerson struct {
	ID      int
	Name    string
	Friends []DBPerson
}

type Database struct {
	database map[int]*DBPerson
}

var (
	ErrNotImplemented = errors.New("not_implemented")
	ErrPersonNotFound = errors.New("account_not_found")
)

func NewDatabase() *Database {
	return &Database{
		database: map[int]*DBPerson{
			621: &DBPerson{ID: 621, Name: "XxDragonSlayerxX", Friends: []int{123, 251, 631}},
			123: &DBPerson{ID: 123, Name: "FriendNo1", Friends: []int{621, 631}},
			251: &DBPerson{ID: 251, Name: "SecondBestFriend", Friends: []int{621}},
			631: &DBPerson{ID: 631, Name: "ThirdWh33l", Friends: []int{621, 123, 251}},
		},
	}
}

func (d *Database) GetUser(id int, out chan DBResult) {
	p, ok := d.database[id]
	if !ok {
		out <- DBResult{p, ErrPersonNotFound}
	}
	time.Sleep(time.Millisecond * 300)
	out <- DBResult{p, nil}
}


// Implement this method
func populate(db *Database, id int) (*PopulatedPerson, error) {
	var ch = make(chan DBResult)
	var friendsOrder = map[int]int{}

	// get user 
	go db.GetUser(id, ch)
	var dbResult = <-ch
	if dbResult.Err != nil {
		fmt.Println(dbResult.Err)
		return nil, dbResult.Err
	}
	var person = dbResult.Person

	// get user's friends
	var friendIds = person.Friends
	var friends = make([]DBPerson, len(friendIds))
	for i, id := range friendIds {
		friendsOrder[id] = i
		go db.GetUser(id, ch)
	}

	for range friendIds {
		dbResult = <-ch
		if dbResult.Err != nil {
			fmt.Println(dbResult.Err)
			continue
		}

		var person = dbResult.Person
		var index = friendsOrder[person.ID]
		friends[index] = *person
	}

	var populatedPerson = PopulatedPerson{
		person.ID,
		person.Name,
		friends,
	}
	return &populatedPerson, nil
}

type testCase2 struct {
	request int
	result  *PopulatedPerson
	err     error
}

func TestPopulate(t *testing.T) {
	testCases := []testCase2{
		{
			request: 621,
			result: &PopulatedPerson{
				ID:   621,
				Name: "XxDragonSlayerxX",
				Friends: []DBPerson{
					DBPerson{ID: 123, Name: "FriendNo1", Friends: []int{621, 631}},
					DBPerson{ID: 251, Name: "SecondBestFriend", Friends: []int{621}},
					DBPerson{ID: 631, Name: "ThirdWh33l", Friends: []int{621, 123, 251}},
				},
			},
			err: nil,
		},
		{
			request: 123,
			result: &PopulatedPerson{
				ID:   123,
				Name: "FriendNo1",
				Friends: []DBPerson{
					DBPerson{ID: 621, Name: "XxDragonSlayerxX", Friends: []int{123, 251, 631}},
					DBPerson{ID: 631, Name: "ThirdWh33l", Friends: []int{621, 123, 251}},
				},
			},
			err: nil,
		},
		{
			request: 251,
			result: &PopulatedPerson{
				ID:   251,
				Name: "SecondBestFriend",
				Friends: []DBPerson{
					DBPerson{ID: 621, Name: "XxDragonSlayerxX", Friends: []int{123, 251, 631}},
				},
			},
			err: nil,
		},
		{
			request: 631,
			result: &PopulatedPerson{
				ID:   631,
				Name: "ThirdWh33l",
				Friends: []DBPerson{
					DBPerson{ID: 621, Name: "XxDragonSlayerxX", Friends: []int{123, 251, 631}},
					DBPerson{ID: 123, Name: "FriendNo1", Friends: []int{621, 631}},
					DBPerson{ID: 251, Name: "SecondBestFriend", Friends: []int{621}},
				},
			},
			err: nil,
		},
	}
	for ind, test := range testCases {
		t.Run(fmt.Sprint(ind), func(t *testing.T) {
			var db = NewDatabase()
			res, err := populate(db, test.request)
			if !cmp.Equal(res, test.result) {
				t.Log("result is incorrect", cmp.Diff(res, test.result))
				t.Fail()
			}
			if !cmp.Equal(err, test.err) {
				t.Log("err is incorrect", cmp.Diff(err, test.err))
				t.Fail()
			}
		})
	}
}
