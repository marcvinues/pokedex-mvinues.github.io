import { Button } from "../Button";
import "./style.scss";

interface Props {
  perPage: number;
  nextPage: () => void;
  prevPage: () => void;
  totalItems: number;
  offset: number;
}

export const Pagination = ({
  perPage,
  nextPage,
  prevPage,
  totalItems,
  offset,
}: Props) => {
  const lastPage = Math.ceil(totalItems / perPage);

  return (
    <div className="footer-pagination">
      <Button disabled={offset === 0} onClick={() => prevPage()}>
        Previous
      </Button>
      <Button disabled={offset === lastPage} onClick={() => nextPage()}>
        Next
      </Button>
    </div>
  );
};
