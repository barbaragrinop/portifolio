export default function Header() {
  return (
    <div className="py-2 fixed z-10 top-0 left-0  flex flex-row w-full justify-between" >
      <strong className="font-lato text-lg px-10">bhellen</strong>
      <div className="flex w-100 text-black-primary font-light gap-7 font-roboto-condensed
       text-sm items-center">
        <div className="">
          <a href="#about">home</a>
        </div>
        <div className="">
          <a href="#projects">about me</a>
        </div>
        <div className="">
          <a href="#contact">works</a>
        </div>
        <div className="">
          <a href="#contact">projects</a>
        </div>
        <div className="">
          <a href="#contact">contact me</a>
        </div>

      </div>
    </div>
  )
}
