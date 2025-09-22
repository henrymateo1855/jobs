import { ChangeEvent, FC, ReactElement } from "react";
import { useSecureFill, UseSecureFillReturn } from "./useSecureFill";

// interface NameAndAddressProps {}

interface NameAndAddressProps
  extends Pick<
    UseSecureFillReturn,
    "form" | "setForm" | "errors" | "setErrors"
  > {}

const NameAndAddress: FC<NameAndAddressProps> = ({ form, setForm, errors }) => {
  function formChange(e: ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value);

    setForm({ ...form, fullName: e.target.value });
    console.log(form);
  }
  return (
    <div className="flex flex-col space-y-4">
      {" "}
      <div>
        <label className="block text-sm font-medium">Full Name</label>
        <input
          value={form.fullName}
          name="fullName"
          onChange={formChange}
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Jane Doe"
        />
        {errors.fullName && (
          <p className="text-red-600 text-sm">{errors.fullName}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium">
          Current Mailing Address
        </label>
        <input
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="123 Main St"
        />
        {errors.address && (
          <p className="text-red-600 text-sm">{errors.address}</p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium">State</label>
          <select
            onChange={(e) => setForm({ ...form, state: e.target.value })}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={form.state}
          >
            <option value="dsds">dsd</option>
            <option value="sds">dsd</option>
            <option value="dsds">dsd</option>
          </select>

          {errors.state && (
            <p className="text-red-600 text-sm">{errors.state}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium">City</label>
          <input
            value={form.city}
            onChange={(e) => setForm({ ...form, city: e.target.value })}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="city"
          />
          {errors.city && <p className="text-red-600 text-sm">{errors.city}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Zip Code</label>
          <input
            value={form.zipCode}
            onChange={(e) => setForm({ ...form, zipCode: e.target.value })}
            className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Zip Code"
          />
          {errors.zipCode && (
            <p className="text-red-600 text-sm">{errors.zipCode}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NameAndAddress;
