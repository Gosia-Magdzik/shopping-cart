import  { list }  from "./Products/list"
import { Cards } from "./Cards"

export const Shop = () => {
    return (
        <section>
        {
            list.map((item) => (
                <Cards item= { item } />
            ))
        }
        </section>
    );
};