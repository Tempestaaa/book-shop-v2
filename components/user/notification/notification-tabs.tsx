"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useHandleQuery from "@/hooks/useHandleQuery";
import { useCallback, useEffect, useState } from "react";

const statusArr = ["unseen", "read"];

export default function NotificationTabs() {
  const term = "tab";
  const { changeURL, getInitialQuery } = useHandleQuery();
  const initialValue = getInitialQuery(term, statusArr[0]);
  const [status, setStatus] = useState(initialValue);

  useEffect(() => {
    const updatedStatus = getInitialQuery(term, statusArr[0]);
    updatedStatus !== status && setStatus(updatedStatus);
  }, [getInitialQuery, status]);

  const handleSwitchTab = useCallback(
    (item: string) => {
      setStatus(item);
      changeURL(term, item);
    },
    [changeURL]
  );

  return (
    <Tabs defaultValue={status}>
      <TabsList>
        {statusArr.map((item) => (
          <TabsTrigger
            key={item}
            value={item}
            onClick={() => handleSwitchTab(item)}
            className="capitalize"
          >
            {item}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
