const MenuItem = (props) => {
    const menuItem = props.menuItem.card.info;
    return (
        <>
          <li role="listitem" className="menu-item"><h1>{menuItem.name}</h1></li>
        </>
    )
}
export default MenuItem;