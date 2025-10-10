"use client"
import React from 'react'
import { useAppDispatch, useAppSelector } from '@/lib/hooks/use-app'
import { decrement, increment } from '@/features/example/slices/example.slice';
import { getExampleThunk } from '@/features/example/thunks/example.thunk';
import { ApiRequestStatus } from '@/types/api/api.types';
import { Button } from '@/components/ui/button';

const ExamplePage = () => {

const dispatch = useAppDispatch();
const { count, requestResponse} = useAppSelector((state) => state.exampleSlice);

  return (
    <div className="p-4">
      <h1>Count: {count}</h1>
      <Button onClick={() => dispatch(increment())}>+</Button>
      <Button onClick={() => dispatch(decrement())}>-</Button>

      <hr className="my-4" />

      <Button onClick={() => dispatch(getExampleThunk())}>Fetch Posts</Button>
      {requestResponse.status === ApiRequestStatus.PENDING ? (
        <p>Loading...</p>
      ) : (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        requestResponse?.data?.slice(0, 5).map((post:any) => <p key={post.id}>{post.title}</p>)
      )}
    </div>
  );
}

export default ExamplePage