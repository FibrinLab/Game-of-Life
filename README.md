# Game of Life

## Introduction:
The Game of Life is a cellular automaton devised by British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. It is Turing complete and can simulate a universal constructor or any other Turing machine. It has fascinated both computer scientists and mathematicians and has been a subject of many research papers. This project aims to provide a detailed documentation of the Game of Life simulation available on the Github repository https://github.com/FibrinLab/Game-of-Life.

## Overview:
The Game of Life is a two-dimensional grid of cells, where each cell can be either alive or dead. The game follows a set of rules to determine the state of each cell in the next generation. The rules are as follows:

* Any live cell with fewer than two live neighbours dies, as if by underpopulation.
* Any live cell with two or three live neighbours lives on to the next generation.
* Any live cell with more than three live neighbours dies, as if by overpopulation.
* Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

The simulation starts with an initial configuration of cells and then proceeds to update the cells' state for each generation based on the above rules. The simulation can be stopped or started at any point, and the user can modify the initial configuration of cells.

## Implementation:
The Game of Life simulation available on the Github repository https://github.com/FibrinLab/Game-of-Life is implemented in Javascript using the p5.js library, which is a library for creating interactive graphics and animations in the browser. The simulation is available as a web application, which can be run on any web browser.

The simulation is composed of two main classes: Cell and Board. The Cell class represents a single cell in the Game of Life, and it keeps track of its current state, its position on the grid, and its color. The Board class represents the Game of Life grid and keeps track of the state of all the cells, the current generation, and the rules for updating the cells' state.

The simulation is drawn using the p5.js library's createCanvas() function, which creates a canvas on the web page. The draw() function of the Board class is called repeatedly by the p5.js library to update the state of the cells and redraw the grid.

The user can interact with the simulation using the buttons and sliders available on the web page. The start and stop buttons allow the user to start or stop the simulation, and the clear button clears the grid and resets the simulation to the initial state. The speed slider controls the speed of the simulation, and the size slider controls the size of the cells.

## Conclusion:
The Game of Life simulation available on the Github repository https://github.com/FibrinLab/Game-of-Life is a well-implemented and user-friendly application that allows the user to explore the fascinating world of cellular automata. The simulation can be used as a tool for learning about the Game of Life and its applications in computer science and mathematics. The documentation provided in this project aims to give a comprehensive overview of the simulation's implementation and features and to serve as a reference for anyone interested in exploring the Game of Life.