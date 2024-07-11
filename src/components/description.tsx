function Description({ text }: { text: string }): JSX.Element {
  return (
    <div className="text-xl w-full h-auto py-8">
      <p>{text}</p>
    </div>
  );
}

export default Description;
