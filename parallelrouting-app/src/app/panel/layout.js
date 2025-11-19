export default function PanelLayout(props) {
    const isAdmin = false
    return <div id="panelLayout">
        {props.children}
        {/* conditional rendering */}
        {isAdmin ? props.admin : props.user}
    </div>

}