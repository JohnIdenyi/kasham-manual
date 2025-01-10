export default function Button({ classNAme, children }) {
  return <button className={`btn ${children}`}>{children}</button>;
}
