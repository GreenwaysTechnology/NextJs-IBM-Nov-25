export default function GamesLayout(props) {

    return <div id="GamesLayout">
        {/* Game Page content */}
        {props.children}
        {/* Team Page content */}
        {props.team}
        {/* Players Page content */}
        {props.player}
    </div>
}