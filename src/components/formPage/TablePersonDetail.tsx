import { Table, Button, Checkbox } from "antd";
import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelectAbleTable } from "../../utils/selectAbleTable";
import { CheckboxChangeEvent } from "antd/es/checkbox";

const TablePersonDetail = () => {
  const { t } = useTranslation();

  const {
    setRowSelection,
    resetSelectedRow,
    setSelectedRowKeysState,
    setSelectedRowsState,
  } = useSelectAbleTable();

  const rowSelection = setRowSelection();

  const [selectAll, setSelectAll] = useState(false);

  const columns = useMemo(() => {
    return [
      {
        title: t("form.name"),
        dataIndex: "name",
        sorter: {
          compare: (a: any, b: any) => a.name - b.name,
        },
      },
      {
        title: t("form.gender"),
        dataIndex: "gender",
        sorter: {
          compare: (a: any, b: any) => a.gender - b.gender,
        },
      },
      {
        title: t("form.phone"),
        dataIndex: "phone",
        sorter: {
          compare: (a: any, b: any) => a.phone - b.phone,
        },
      },
      {
        title: t("form.national"),
        dataIndex: "national",
        sorter: {
          compare: (a: any, b: any) => a.national - b.national,
        },
      },
      {
        title: t("action"),
        dataIndex: "action",
      },
    ];
  }, [t]);

  const onSelectAll = useCallback(
    (e: CheckboxChangeEvent) => {
      const { checked } = e.target;
      setSelectAll(checked);
      if (checked) {
        setSelectedRowKeysState([]);
        setSelectedRowsState([]);
      } else {
        resetSelectedRow();
      }
    },
    [setSelectedRowKeysState, setSelectedRowsState, resetSelectedRow]
  );

  const onDeSelectAll = useCallback(() => {
    const isAccept = confirm(t("confirmMessage"));

    if (isAccept) {
      setSelectAll(false);
      resetSelectedRow();
    }
  }, [resetSelectedRow, t]);

  return (
    <>
      <div className="mb-10">
        <Checkbox onChange={onSelectAll} checked={selectAll}>
          {t("selectAll")}
        </Checkbox>
        <Button
          style={{ width: "90px", marginLeft: "20px" }}
          onClick={onDeSelectAll}
        >
          {t("clear")}
        </Button>
      </div>
      <Table
        columns={columns}
        rowSelection={{ type: "checkbox", ...rowSelection }}
      ></Table>
    </>
  );
};

export default TablePersonDetail;
