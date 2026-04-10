export default function Header() {
  const now = new Date();

  return (
    <header>
      <h3>Result University</h3>

      <span>Время сейчас: {now.toLocaleTimeString()}</span>
    </header>
  );
}
