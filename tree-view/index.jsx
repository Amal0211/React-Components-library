import MenuList from "./menu-list";

export default function TreeView({menus=[]}){
    return (
        <div className="tree-view-container">
            <MenuList list={menus}></MenuList>
        </div>
    )

}