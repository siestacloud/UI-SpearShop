import { Filters } from "../../common/filters/filters";
import { SubMenu } from "../../common/menu/menu";
import { News } from "../../common/news/news";
import { Product } from "../../common/product/product";
import { Trend } from "../../common/trend/trend";


export function Category() {
  return (
    <>
      <div className="category m-row">
        <div className="m-fb20 m-column m-h100">
          <SubMenu style="m-box" />
          <Filters  />
        </div>
        <Product style="m-box m-fb78 m-stretch" />
      </div>
      <Trend />
    </>
  );
}



