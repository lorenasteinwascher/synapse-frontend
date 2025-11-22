type AlertProps = {
  message: string;
  type?: "success" | "error" | "info";
};

export default function Alert({ message, type = "error" }: AlertProps) {
  const styles = {
    success: "border-green-300 bg-green-50 text-green-700",
    error: "border-red-300 bg-red-50 text-red-700",
    info: "border-blue-300 bg-blue-50 text-blue-700",
  };

  return (
    <div
      role="alert"
      className={`rounded-2xl border p-3 ${styles[type]}`}
    >
      {message}
    </div>
  );
}
