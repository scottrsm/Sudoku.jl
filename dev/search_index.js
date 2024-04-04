var documenterSearchIndex = {"docs":
[{"location":"#Sudoku.jl-Documentation","page":"Sudoku.jl Documentation","title":"Sudoku.jl Documentation","text":"","category":"section"},{"location":"","page":"Sudoku.jl Documentation","title":"Sudoku.jl Documentation","text":"CurrentModule = Sudoku","category":"page"},{"location":"#Overview","page":"Sudoku.jl Documentation","title":"Overview","text":"","category":"section"},{"location":"","page":"Sudoku.jl Documentation","title":"Sudoku.jl Documentation","text":"Below are two are two Sudoku solvers: One takes a puzzle as a matrix while the other takes a file. In addition, a few utility functions that help  in the process are listed.","category":"page"},{"location":"","page":"Sudoku.jl Documentation","title":"Sudoku.jl Documentation","text":"get_block            : This function retrieves sub-blocks of a Sudoku matrix.\nget_blk_idx          : This function determines which sub-block matrix to pick. \nhas_dups             : Checks a given vector/matrix for non-zero duplicates.\nconsist_chk          : Checks for consistency of puzzle, partial, or full Sudoku solution matrix. \ncheck_sudoku_solution: Checks a proposed solution matrix against its puzzle matrix.\nsolve_sudoku         : Solves a Sudoku puzzle represented as a matrix.\nsolve_sudoku_puzzle  : Solves a Sudoku puzzle represented as a file.","category":"page"},{"location":"#Utilities","page":"Sudoku.jl Documentation","title":"Utilities","text":"","category":"section"},{"location":"","page":"Sudoku.jl Documentation","title":"Sudoku.jl Documentation","text":"get_block","category":"page"},{"location":"#Sudoku.get_block","page":"Sudoku.jl Documentation","title":"Sudoku.get_block","text":"get_block(S, i, j)\n\nGet the (i, j) sub-block matrix of S.\n\nArguments\n\nS::Matrix{Int8} – A sudoku matrix.\ni::Int64        – The i^irm th block row entry.\nj::Int64        – The j^jrm th block column entry.\n\nReturn\n\n::Matrix{Int8} – The (i^rm th j^rm th) sub-block matrix. \n\n\n\n\n\n","category":"function"},{"location":"","page":"Sudoku.jl Documentation","title":"Sudoku.jl Documentation","text":"get_blk_idx","category":"page"},{"location":"#Sudoku.get_blk_idx","page":"Sudoku.jl Documentation","title":"Sudoku.get_blk_idx","text":"get_blk_idx(h)\n\nGet the sub-block index pair for a given index pair of a Sudoku matrix.\n\nArguments\n\nh::CartesianIndex – The index into a Sudoku matrix.\n\nExamples\n\nThe code below gets the sub-block index pair, (2,2) (the index representing the middle 3x3 block matrix), when passed the Sudoku matrix index pair (4,6).\n\njulia> get_blk_idx(CaresianIndex(4, 6))\n(2,2)\n\nReturn\n\n::Tuple{Int64, Int64} – The index pair of the sub-matrix block.\n\n\n\n\n\n","category":"function"},{"location":"","page":"Sudoku.jl Documentation","title":"Sudoku.jl Documentation","text":"has_dups","category":"page"},{"location":"#Sudoku.has_dups","page":"Sudoku.jl Documentation","title":"Sudoku.has_dups","text":"has_dups(v)\n\nCheck if a vector/matrix has duplicate numeric (other than 0) entries.\n\nArguments\n\nv :: Union{Vector{Int8}, Matrix{Int8}}\n\nReturn\n\n::Bool – If true there exists at least one duplicate.\n\n\n\n\n\n","category":"function"},{"location":"","page":"Sudoku.jl Documentation","title":"Sudoku.jl Documentation","text":"consist_chk","category":"page"},{"location":"#Sudoku.consist_chk","page":"Sudoku.jl Documentation","title":"Sudoku.consist_chk","text":"consist_chk(S)\n\nChecks the consistency of a Sudoku matrix, S.\n\nThis means that we check that there are no (non-zero) duplicate entries in any rows, columns, or sub-blocks.\n\nArgumens\n\nS::Matrix{Int8} – A Sudoku puzzle, proposed solution, or                      intermediate solution.\n\nReturn\n\n::Bool – Returns true if Sudoku matrix is consistent.\n\n\n\n\n\n","category":"function"},{"location":"","page":"Sudoku.jl Documentation","title":"Sudoku.jl Documentation","text":"check_sudoku_solution","category":"page"},{"location":"#Sudoku.check_sudoku_solution","page":"Sudoku.jl Documentation","title":"Sudoku.check_sudoku_solution","text":"check_sudoku_solution(SP, SS)\n\nChecks that SS is a solution of the puzzle, SP.\n\nIt does this by doing the following:\n\nChecks for any (non-zero) duplicate entries in  any rows, columns, or sub-blocks.\nChecks that the row, column, and sub-block sums are SUDOKU_SUM.\nChecks that the proposed solution is consistent with the puzzle matrix, SP. \n\nArguments\n\nSP::Matrix{Int8} – A Sudoku puzzle in matrix form.                       Zeros represent blanks.\nSS::Matrix{Int8} – Proposed solution for SP.\n\nReturns\n\n::Bool – If true, the proposed solution is correct.\n\n\n\n\n\n","category":"function"},{"location":"#Sudoku-Solvers","page":"Sudoku.jl Documentation","title":"Sudoku Solvers","text":"","category":"section"},{"location":"","page":"Sudoku.jl Documentation","title":"Sudoku.jl Documentation","text":"solve_sudoku","category":"page"},{"location":"#Sudoku.solve_sudoku","page":"Sudoku.jl Documentation","title":"Sudoku.solve_sudoku","text":"solve_sudoku(SP, rec_count; verbose=false)\n\nHelper function that does the work of the top level solver.\n\nArguments\n\nS::Matrix{Int8}  – A Sudoku puzzle matrix.\nrec_count::Int64 – The count of the number of times this function has been called.\n\nKeyword Arguments\n\nverbose::Bool=false – If true, print out extra information.\n\nReturn\n\n(ok, SS) \n\nok::Bool – If true, a proposed solution was found.\nS::Matrix{Int8}} – A proposed, or inconsistent solution matrix.\n\n\n\n\n\nsolve_sudoku(S; verbose=false)\n\nSolves a Sudoku puzzle represented as a matrix. \n\nThe value, 0, is used in a puzzle matrix to represent a blank.\n\nArguments\n\nS::Matrix{Int8}  – A Sudoku puzzle matrix.\n\nKeyword Arguments\n\nverbose::Bool=false    – If true, print out extra information.\n\nReturn\n\n(ok, chk_sol, SS) \n\nok::Bool – If true, a proposed solution was found.\nchk_sol::Bool – If true, the proposed solution is correct. \nSS::Matrix{Int8}} – A proposed, or inconsistent/incomplete solution matrix.\n\n\n\n\n\n","category":"function"},{"location":"","page":"Sudoku.jl Documentation","title":"Sudoku.jl Documentation","text":"solve_sudoku_file","category":"page"},{"location":"#Sudoku.solve_sudoku_file","page":"Sudoku.jl Documentation","title":"Sudoku.solve_sudoku_file","text":"solve_sudoku_file(puzzle_file_name; <keyword arguments>])\n\nSolves and prints a solution of a Sudou puzzle file.\n\nThe file is the name of a CSV file (without extension). The file format is 9 rows of values, 0-9, with \"0\" representing a blank.\n\nNOTE: The CSV file should not have a header.\n\nArguments\n\npuzzle_file_name::AbstractString – The puzzle file name without the extension.\n\nKeyword Arguments\n\npuzzle_dir=joinpath(@__DIR__, \"../puzzles\") :: AbstractString – The path to the puzzle file directory.\nverbose=false :: Bool – If true, print more output.\n\nReturn\n\n::Nothing\n\n\n\n\n\n","category":"function"},{"location":"#Index","page":"Sudoku.jl Documentation","title":"Index","text":"","category":"section"},{"location":"","page":"Sudoku.jl Documentation","title":"Sudoku.jl Documentation","text":"","category":"page"}]
}
