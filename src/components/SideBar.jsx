import './styles/styles.css'

const SideBar = (props) => {

    return (
        <div className='all-side-names'>
            {props.actualPosts.slice(0).reverse().map((post) => {
                return (
                    <div className='side-box'>
                        <h3 className='white-text'>{post.name}</h3>
                    </div>
                )
            })}
        </div>
    )
}
export default SideBar;