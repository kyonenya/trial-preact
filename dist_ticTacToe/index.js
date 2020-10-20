import { h, render, Component } from 'preact';
class Square extends Component {
    render() {
        return (h("button", { className: "square" }));
    }
}
class Board extends Component {
    renderSquare(i) {
        return h(Square, null);
    }
    render() {
        const status = 'Next player: X';
        return (h("div", null,
            h("div", { className: "status" }, status),
            h("div", { className: "board-row" },
                this.renderSquare(0),
                this.renderSquare(1),
                this.renderSquare(2)),
            h("div", { className: "board-row" },
                this.renderSquare(3),
                this.renderSquare(4),
                this.renderSquare(5)),
            h("div", { className: "board-row" },
                this.renderSquare(6),
                this.renderSquare(7),
                this.renderSquare(8))));
    }
}
class Game extends Component {
    render() {
        return (h("div", { className: "game" },
            h("div", { className: "game-board" },
                h(Board, null)),
            h("div", { className: "game-info" },
                h("div", null),
                h("ol", null))));
    }
}
// ========================================
render(h(Game, null), document.getElementById('root'));
