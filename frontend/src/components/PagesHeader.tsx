export const PagesHeader = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => (
  <h1 className="my-5 text-2xl font-semibold">
    {title} <span className="text-xl font-bold pl-1">{subTitle}</span>{" "}
  </h1>
);
