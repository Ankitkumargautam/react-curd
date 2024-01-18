import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useEffect } from 'react';

const FormComponent = ({
  currentId,
  setCurrentId,
  updateData,
  setUpdateData,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    setValue,
  } = useForm();

  useEffect(() => {
    if (currentId !== 0) {
      setValue('name', updateData.name || '');
      setValue('email', updateData.email || '');
    }
  }, [currentId, updateData, setValue]);

  const submitHandler = async () => {
    const formData = getValues();
    console.log('formData: ', formData);

    if (currentId !== 0) {
      const { data } = await axios.patch(
        `/api/updateEmp/${currentId}`,
        formData
      );

      console.log('update', data);
      setCurrentId(0);
      setUpdateData({
        name: '',
        email: '',
      });
      setValue('name', '');
      setValue('email', '');
    } else {
      const { data } = await axios.post('/api/saveEmp', formData);
      setCurrentId(data._id);
      console.log('save', data);
    }
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <label>Name</label>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{
            required: 'Name is required',
          }}
          render={({ field }) => <input {...field} placeholder="Enter name" />}
        />
        {errors.name && (
          <span style={{ color: 'red' }}>{errors.name.message}</span>
        )}
      </div>
      <div>
        <label>Email</label>
        <Controller
          name="email"
          defaultValue=""
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Enter valid email',
            },
          }}
          render={({ field }) => <input {...field} placeholder="Enter email" />}
        />
        {errors.email && (
          <span style={{ color: 'red' }}>{errors.email.message}</span>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormComponent;
