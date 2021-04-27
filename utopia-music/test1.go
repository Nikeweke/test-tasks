/**
* Split string name into test expectd string ()
*/

package main

import (
	"testing"
	"strings"
	"github.com/google/go-cmp/cmp"
)

type testCase struct {
	raw      string
	expected person
}

// Implement this method
func (t testCase) parse() person {
	var str = strings.Title(strings.ToLower(t.raw))
	var names = strings.Split(str, " ")
	var namesLen = len(names)
	if namesLen == 1 {
		return person{
			FirstName: names[0],
			MiddleNames: []string{},
		}
	}

	var middleNames = names[1:(namesLen-1)]
	return person{
		names[0], 
		middleNames,  
		&names[namesLen-1],
	}
}

type person struct {
	FirstName   string
	MiddleNames []string
	LastName    *string
}

func strPtr(v string) *string { return &v }

func TestNameParsing(t *testing.T) {
	testCases := []testCase{
		{raw: "Michael Daniel Jäger",           expected: person{FirstName: "Michael", MiddleNames: []string{"Daniel"}, LastName: strPtr("Jäger")}},
		{raw: "LINUS HARALD christer WAHLGREN", expected: person{FirstName: "Linus", MiddleNames: []string{"Harald", "Christer"}, LastName: strPtr("Wahlgren")}},
		{raw: "Pippilotta Viktualia Rullgardina Krusmynta Efraimsdotter LÅNGSTRUMP", expected: person{FirstName: "Pippilotta", MiddleNames: []string{"Viktualia", "Rullgardina", "Krusmynta", "Efraimsdotter"}, LastName: strPtr("Långstrump")}},
		{raw: "Kalle Anka",                     expected: person{FirstName: "Kalle", MiddleNames: []string{}, LastName: strPtr("Anka")}},
		{raw: "Ghandi",                         expected: person{FirstName: "Ghandi", MiddleNames: []string{}}},
	}
	
	for _, test := range testCases {
		t.Run(test.raw, func(t *testing.T) {
			actual := test.parse()
			if !cmp.Equal(test.expected, actual) {
				t.Log(cmp.Diff(test.expected, actual))
				t.Fail()
			}
		})
	}
}
