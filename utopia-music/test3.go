/**
* Check if knight can attack another knight on chess board
*/

package tasks

import (
	"fmt"
	"strconv"
	"testing"

	"github.com/google/go-cmp/cmp"
)

// size
const N = 8
const M = 8
var letterMap = map[string]int{
	"A": 0,
	"B": 1,
	"C": 2,
	"D": 3,
	"E": 4,
	"F": 5,
	"G": 6,
	"H": 7,
}
var numberMap = map[int]int{
	1: 7,
	2: 6,
	3: 5,
	4: 4,
	5: 3,
	6: 2,
	7: 1,
	8: 0,
}
var board = [N][M]int{}

type ChessPosition struct {
	Number int
	Letter string
}

func (c ChessPosition) toString() string {
	return strconv.Itoa(numberMap[c.Number]) + "," + strconv.Itoa(letterMap[c.Letter])
}

func (c ChessPosition) isValid() bool {
	return numberMap[c.Number] != 0 || letterMap[c.Letter] != 0
}

// Implement me
func canAttack(chessPosition1, chessPosition2 ChessPosition) bool {
	var Xmoves = []int{ 2, 1, -1, -2, -2, -1, 1, 2 }
	var Ymoves = []int{ 1, 2, 2, 1, -1, -2, -2, -1 }

	if !chessPosition1.isValid() || !chessPosition2.isValid() {
		return false
	} 

	for i := 0; i < N; i++ {
		var x = numberMap[chessPosition1.Number] + Xmoves[i]
		var y = letterMap[chessPosition1.Letter] + Ymoves[i] 

		if x >= 0 && y >= 0 && x < N && y < M && board[x][y] == 0 {
			
			var possibleMoveStr = strconv.Itoa(x) + "," + strconv.Itoa(y) 
			if possibleMoveStr == chessPosition2.toString() {
				return true
			}
		}
	}

	return false
}

type testCase3 struct {
	Position1 ChessPosition
	Position2 ChessPosition
	CanAttack bool
}

func TestChess(t *testing.T) {
	testCases := []testCase3{
		{Position1: ChessPosition{Number: 2, Letter: "C"}, Position2: ChessPosition{Number: 4, Letter: "D"}, CanAttack: true},
		{Position1: ChessPosition{Number: 7, Letter: "F"}, Position2: ChessPosition{Number: 5, Letter: "E"}, CanAttack: true},
		{Position1: ChessPosition{Number: 2, Letter: "C"}, Position2: ChessPosition{Number: 1, Letter: "A"}, CanAttack: true},
		{Position1: ChessPosition{Number: 6, Letter: "A"}, Position2: ChessPosition{Number: 4, Letter: "B"}, CanAttack: true},
		{Position1: ChessPosition{Number: 6, Letter: "A"}, Position2: ChessPosition{Number: 5, Letter: "B"}, CanAttack: false},
		{Position1: ChessPosition{Number: 2, Letter: "C"}, Position2: ChessPosition{Number: 2, Letter: "C"}, CanAttack: false},
		{Position1: ChessPosition{Number: -1, Letter: "A"}, Position2: ChessPosition{Number: 1, Letter: "B"}, CanAttack: false},
		{Position1: ChessPosition{Number: 4, Letter: "D"}, Position2: ChessPosition{Number: 5, Letter: "E"}, CanAttack: false},
	}
	for ind, test := range testCases {
		t.Run(fmt.Sprint(ind), func(t *testing.T) {
			actual := canAttack(test.Position1, test.Position2)
			if !cmp.Equal(test.CanAttack, actual) {
				t.Log(cmp.Diff(test.CanAttack, actual))
				t.Fail()
			}
		})
	}
}
