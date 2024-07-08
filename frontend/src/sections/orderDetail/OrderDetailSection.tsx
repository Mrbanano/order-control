export const OrderDetailSection = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <section className=" flex md:flex-row  md:p-2 items-start justify-between gap-5 ">
      {children}
    </section>
  );
};
