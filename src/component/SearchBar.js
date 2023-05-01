
const SearchBar = () => (
    <form action="/" method="get">
        <span>
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search courses"
            name="s"
        />
        </span>
        <button type="submit">Search</button>
        <span>
            <div>
                <input type = "radio" name = "term" value = "Fall"></input>
                <label for="term">Fall</label>
            </div>
            <div>
                <input type = "radio" name = "term" value = "Spring"></input>
                <label for="term">Spring</label>
            </div>
        </span>
    </form>
);

export default SearchBar;