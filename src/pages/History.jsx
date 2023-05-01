import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { supabase } from "../js/supabaseClient";
import Swal from "sweetalert2";

const History = () => {
  const { state } = useLocation();
  let livesSaved = 0;
  console.log(state);
  const [list, setList] = useState(null);
  useEffect(() => {
    const onRender = async () => {
      const { data, error } = await supabase
        .from("Reports")
        .select("*")
        .eq("userId", state)
        .order("id", { ascending: true });
      if (error) {
        console.log(error);
      }
      if (data) {
        console.log(data);
        setList(data);
      }
    };
    onRender();
  }, [state]);
  return (
    <>
      {state && (
        <div className="h-auto w-screen p-5 pb-24 relative">
          <div className="flex justify-between pb-16">
            <h1 className="robo text-3xl font-black w-1/2 text-[#BB0C0C]">
              Your previous contributions
            </h1>
            <a href="/">
              <img src="/user.svg" alt="The Navigation Icon" />
            </a>
          </div>
          {list && (
            <div className="h-[550px] w-full">
              {list.map((value, i) => (
                <div
                  key={i}
                  className="w-full h-24 bg-white border-2 border-black rounded-lg mb-5 flex gap-5 p-5"
                >
                  <h1 className="h-full text-xl robo">{value.id}</h1>
                  <h1 className="h-full text-xl robo">{value.desc}</h1>
                  <h1 className="h-full text-xl robo">
                    {value.verified ? "Verified" : "Not Verified"}
                  </h1>
                  <h1 className="invisible">
                    {value.verified ? (livesSaved += value.amount) : ""}
                  </h1>
                </div>
              ))}
              <div className="w-full flex justify-center">
                <button
                  onClick={() => {
                    if (livesSaved >= 3) {
                      Swal.fire(
                        "Keep it going!",
                        `You have saved ${livesSaved} lives`,
                        "success"
                      );
                    } else {
                      Swal.fire("Keep it going!", ``, "success");
                    }
                  }}
                  className="bg-[#EDE7E7] rounded-lg p-5 text-xl robo"
                >
                  Lives Saved
                </button>
              </div>
            </div>
          )}
          <Navbar state={state} />
        </div>
      )}
    </>
  );
};

export default History;
