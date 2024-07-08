export const PageWrapper = ({
  header,
  section,
}: {
  header: React.ReactNode;
  section: React.ReactNode;
}) => {
  return (
    <main className="md:p-10 w-full max-w-screen-2xl mx-auto">
      <header className="p-2">{header}</header>
      <section>{section}</section>
    </main>
  );
};
