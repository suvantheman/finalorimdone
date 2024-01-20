export default function Header({ title }) {
  return (<>
    <div className="header">
      <img width="90px" height="90px" src="../assets/CRANIUM LOGO ORANGE.png" />
      <h1 className="title">{title}</h1>
    </div>
  </>)
}