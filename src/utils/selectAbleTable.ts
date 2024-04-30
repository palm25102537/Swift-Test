import { useState } from "react";

export function useSelectAbleTable() {
  const [selectedRowKeysState, setSelectedRowKeysState] = useState<any[]>([]);
  const [selectedRowsState, setSelectedRowsState] = useState<any[]>([]);

  function setRowSelection() {
    return {
      selectedRowKeys: selectedRowKeysState,
      hideSelectAll: true,
      columnWidth: "3%",
      onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
        setSelectedRowKeysState(() => selectedRowKeys);
        setSelectedRowsState(() => selectedRows);
      },
    };
  }

  function resetSelectedRow() {
    setSelectedRowsState([]);
    setSelectedRowKeysState([]);
  }

  return {
    setRowSelection,
    resetSelectedRow,
    selectedRowKeysState,
    selectedRowsState,
    setSelectedRowKeysState,
    setSelectedRowsState,
  };
}
