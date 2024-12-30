import { useState } from "react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "./components/ui/select";

function SwapWidget() {
  const [fromValue, setFromValue] = useState("");
  const [toValue, setToValue] = useState("");
  const [fromToken, setFromToken] = useState("ETH");
  const [toToken, setToToken] = useState("USDC");

  const handleSwap = () => {
    // Simulate swap logic
    setToValue((parseFloat(fromValue) * 0.9).toFixed(2)); // Example conversion rate
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg p-6 space-y-4">
      <h2 className="text-lg font-bold">Swap Widget</h2>

      <div className="space-y-2">
        <label className="block text-sm font-medium">From</label>
        <div className="flex items-center space-x-2">
          <Input
            type="number"
            placeholder="0.0"
            value={fromValue}
            onChange={(e) => setFromValue(e.target.value)}
            className="flex-1"
          />
          <Select value={fromToken} onValueChange={setFromToken}>
            <SelectTrigger>{fromToken}</SelectTrigger>
            <SelectContent>
              <SelectItem value="ETH">ETH</SelectItem>
              <SelectItem value="BTC">BTC</SelectItem>
              <SelectItem value="SOL">SOL</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium">To</label>
        <div className="flex items-center space-x-2">
          <Input
            type="text"
            placeholder="0.0"
            value={toValue}
            readOnly
            className="flex-1"
          />
          <Select value={toToken} onValueChange={setToToken}>
            <SelectTrigger>{toToken}</SelectTrigger>
            <SelectContent>
              <SelectItem value="USDC">USDC</SelectItem>
              <SelectItem value="DAI">DAI</SelectItem>
              <SelectItem value="MATIC">MATIC</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button
        onClick={handleSwap}
        disabled={!fromValue || isNaN(parseFloat(fromValue))}
        className="w-full"
      >
        Swap
      </Button>
    </div>
  );
}

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <SwapWidget />
    </div>
  );
}

export default App;
