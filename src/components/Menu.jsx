export const Menu = () => {
    let menu = [
        {'name': 'Sass', 'href': 'sass'},
        {'name': 'Components', 'href': 'components'},
        {'name': 'Sass', 'href': 'sass'},
    ]

    return <div className="menu">
        <ul>
            {menu.map(item => {
                return <li><a target="_blank" href={item.href}>{item.name}</a></li>
            })}
        </ul>
    </div>
}