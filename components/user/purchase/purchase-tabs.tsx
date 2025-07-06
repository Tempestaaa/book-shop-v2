"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useHandleQuery from "@/hooks/useHandleQuery";
import { useCallback, useEffect, useState } from "react";

type Status = {
  label: string;
  value: number;
};

const statusArr: Status[] = [
  { label: "all", value: 0 },
  { label: "to pay", value: 1 },
  { label: "to ship", value: 2 },
  { label: "to receive", value: 3 },
  { label: "completed", value: 4 },
  { label: "cancelled", value: 5 },
  { label: "return refund", value: 6 },
];

export default function PurchaseTabs() {
  const term = "tab";
  const { changeURL, getInitialQuery } = useHandleQuery();
  const initialValue = getInitialQuery(term, statusArr[0].value.toString());
  const initialItem = statusArr.find(
    (item) => item.value.toString() === initialValue
  );
  const [status, setStatus] = useState(initialItem);

  useEffect(() => {
    const updatedStatus = getInitialQuery(term, statusArr[0].value.toString());
    const updatedItem = statusArr.find(
      (item) => item.value.toString() === updatedStatus
    );
    if (updatedStatus !== status?.value.toString()) setStatus(updatedItem);
  }, [getInitialQuery, status]);

  const handleSwitchTab = useCallback(
    (item: Status) => {
      setStatus(item);
      changeURL(term, item.value.toString());
    },
    [changeURL]
  );

  return (
    <Tabs defaultValue={status?.value.toString()}>
      <TabsList className="w-full">
        {statusArr.map((item) => (
          <TabsTrigger
            key={item.value}
            value={item.value.toString()}
            onClick={() => handleSwitchTab(item)}
            className="capitalize"
          >
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
