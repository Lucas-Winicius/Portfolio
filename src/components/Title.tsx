import "@/styles/Title.css"

function Title({ title, className }: { title: string, className?: string }) {
  return <h1 className={`pink-title ${className}`}>{title}</h1>;
}

export default Title;
