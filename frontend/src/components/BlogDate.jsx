function BlogDate({ date }) {
  return (
    <time dateTime={date}>
      {new Date(date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })}
    </time>
  );
}

export default BlogDate;