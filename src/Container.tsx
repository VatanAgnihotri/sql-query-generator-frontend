import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Result from "./Components/Result";
import { getQuery } from "./common/utils";

const Container: React.FC = (props) => {
  const [query, updateQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBackendUp()
      .then((res) => {
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const getBackendUp = async () => {
    try {
      const query = await getQuery(
        "Create user table with firstname, lastname, DOB, highest education"
      );
      return query;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  return (
    <div className="relative overflow-hidden dark:bg-neutral-900 h-screen">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
        <div className="text-center">
          {loading ? (
            <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
              <div className="flex justify-center">
                <div
                  className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
                  role="status"
                  aria-label="loading"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          ) : (
            <>
              <Header />
              <Search updateQuery={updateQuery} />
              {query && <Result query={query} />}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Container;
