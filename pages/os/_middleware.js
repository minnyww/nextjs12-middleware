import { NextResponse } from "next/server";

const middleware = (req, ev) => {
  const os = req.ua.os.name;
  console.log("osss ---> ,os", os);

  return NextResponse.rewrite(`/os/${os}`);
};

export default middleware;
