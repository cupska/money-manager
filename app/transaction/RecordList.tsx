import { PrismaClient } from "@prisma/client";
import moment from "moment";
import { ListItem } from "./ListItem";
import { MoneyLabel } from "@/components/ui/MoneyLabel";
import { useEffect, useState } from "react";

function RecordList({ data }) {
  return (
    <>
      <span>asq</span>

      {!!data &&
        Object.keys(data).map((key) => (
          <div key={key}>
            <div>{key.slice(4)}</div>
            {data[key].map((item) => {
              return (
                <li key={item.id}>
                  <ListItem
                    id={item.id}
                    icon={item.category.icon}
                    title={item.category.name}
                    subTitle={item.account.name}
                    rightItem={
                      <span>
                        <MoneyLabel
                          value={String(item.value)}
                          useFor={item.orderType}
                        />
                      </span>
                    }
                  />
                </li>
              );
            })}
          </div>
        ))}
    </>
  );
}

export { RecordList };
