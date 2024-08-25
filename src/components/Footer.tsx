import { Info } from "../User";

const Footer = () => {
    return    <div className="mx-36 mt-20 mb-28 font-mono flex justify-center flex-col gap-2 items-center">
              <div className="text-3xl text-primaryColor font-semibold">{Info.name}</div>
              <div className="text-textColor text-xl">Copyright &copy; {new Date().getFullYear()} {Info.name}  | All rights resereved</div>
    </div>
}

export default Footer ;