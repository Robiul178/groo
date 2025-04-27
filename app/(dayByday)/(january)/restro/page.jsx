import Items from "@/components/restro/Items";
import LeftSideBarr from "@/components/restro/LeftSideBarr";
import OrderDetails from "@/components/restro/OrderDetails";

export default function page() {
  return (
    <div>
      <div className="w-full h-screen flex">
        <div>
          <LeftSideBarr />
        </div>
        <div className="flex">
          <Items />
          <OrderDetails />
        </div>
      </div>
    </div>
  );
}
