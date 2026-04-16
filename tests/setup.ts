import "@testing-library/jest-dom";

// Mock ResizeObserver for Radix UI components like Select or Popover
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserverMock;
