
import Typewriter from "typewriter-effect";

function TypeCard() {
  return (
    <div className="bg-slate-950">
      <div className="text-4xl">
        <Typewriter
          options={{
            strings: ["Feel Free To Download Our Tech Courses", "hello world "],
            autoStart: true,
            loop: true,
            delay: 50,
          }}
        />
      </div>
    </div>
  );
}

export default TypeCard;
