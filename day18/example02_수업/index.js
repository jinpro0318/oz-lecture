import { title as printTitle, print } from "./printer.js";
import { title as scannerTitle, scan } from "./scanner.js";
import devices from "./devices.js";

print(printTitle);
scan(scannerTitle);
devices.print(devices.printTitle);
devices.scan(devices.scannerTitle);
