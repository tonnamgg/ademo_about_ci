import { renderHook, act } from '@testing-library/react';
import useCounter from '../src/hooks/features/homepage/useCounter';

describe('useCounter', () => {
  it('should have initial count 0 and val 1', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current.count).toBe(0);
    expect(result.current.val).toBe(1);
  });

  it('should increment count by val', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(1);
  });

  it('should update val and increment by new val', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.setVal(5);
    });
    act(() => {
      result.current.increment();
    });
    expect(result.current.count).toBe(5);
  });

  it('should accumulate count with multiple increments', () => {
    const { result } = renderHook(() => useCounter());
    act(() => {
      result.current.increment(); // +1
    });
    act(() => {
      result.current.setVal(3);
    });
    act(() => {
      result.current.increment(); // +3
    });
    expect(result.current.count).toBe(4);
  });
});
