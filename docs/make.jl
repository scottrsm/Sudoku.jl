using Sudoku
import Pkg

Pkg.add("Documenter")
using Documenter

makedocs(
	sitename = "Sudoku",
	format = Documenter.HTML(),
	modules = [Sudoku]
	)

	# Documenter can also automatically deploy documentation to gh-pages.
	# See "Hosting Documentation" and deploydocs() in the Documenter manual
	# for more information.
	deploydocs(
		repo = "github.com/scottrsm/Sudoku.jl.git"
	)
