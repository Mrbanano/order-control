//types
import type { TableProps } from "@/types/table/tableTypes";

const Table = <T extends {}>({
  columns = [],
  data = [],
  actions = [],
}: TableProps<T>): JSX.Element => {
  const gridCols = `grid-cols-7`;

  return (
    <div className="max-w-full overflow-x-auto ">
      <div className="min-w-[1170px]">
        {/* table header start */}
        <div
          className={`grid ${gridCols} rounded-t-[10px] bg-brandColor px-5 py-4 lg:px-7.5 2xl:px-11 `}
        >
          {columns.map((column, index) => (
            <div
              key={index}
              className={`col-span-${Math.round(12 / columns.length)}`}
            >
              <h5 className="font-medium text-white">{column.label}</h5>
            </div>
          ))}
        </div>
        {/* table header end */}

        {/* table body start */}
        <div className="rounded-b-[10px] bg-white dark:bg-boxdark">
          {data.map((item, index) => (
            <div
              key={index}
              className={`grid ${gridCols} border-t border-[#EEEEEE] px-5 py-4 dark:border-strokedark lg:px-7.5 2xl:px-11`}
            >
              {columns.map((column, colIndex) => (
                <div
                  key={colIndex}
                  className={`col-span-${12 / columns.length}`}
                >
                  {column.accessor === "actions" && (
                    <div className="relative h-full ">
                      {actions.map((action, actionIndex) => {
                        if (action.component) {
                          return action.component(item);
                        }

                        return (
                          <button
                            key={actionIndex}
                            onClick={() =>
                              action.onClick && action.onClick(item)
                            }
                            className="text-brandColor dark:text-brandColor"
                          >
                            {action.label}
                          </button>
                        );
                      })}
                    </div>
                  )}
                  {column.accessor !== "actions" && (
                    <p className="text-[#637381] dark:text-bodydark">
                      {String(item[column.accessor])}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
