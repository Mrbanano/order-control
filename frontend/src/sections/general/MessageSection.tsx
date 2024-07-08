interface MessageSectionProps {
  text: string;
  component?: React.ReactNode;
  action?: {
    text: string;
    onClick: () => void;
  };
}

export const MessageSection = ({
  text,
  action,
  component,
}: MessageSectionProps) => {
  return (
    <div className="w-full  my-5 flex flex-col gap-3">
      <p className="text-xl font-semibold py-5">{text}</p>
      {component && component}
      {action && (
        <button
          className="bg-primary text-white px-3 py-1 rounded-md ml-2"
          onClick={action.onClick}
        >
          {action.text}
        </button>
      )}
    </div>
  );
};
