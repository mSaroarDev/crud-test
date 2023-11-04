"use client"
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      title: "",
    },

    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/new", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (res.status === 200) {
          resetForm();
          alert("success");
          router.refresh();
        }
      } catch (error) {
        alert("error");
      }
    },
  });

  return (
    <>
      <form className="p-10 mt-24" onSubmit={formik.handleSubmit}>
        <input type="text" id="title" name="title" className="input input-bordered w-full max-w-xs" value={formik.values.title} onChange={formik.handleChange} />
        <button type="submit" className="btn btn-neutral">Post</button>
      </form>
    </>
  );
}
