import { OpaqueToken } from '@angular/core';
import * as scanner from 'nativescript-barcodescanner';
export const BARCODE_SCANNER = new OpaqueToken('barcodescanner');

//These are re-exported for convenience (so you don't have to import from two places)
export const barcodescanner = new scanner.BarcodeScanner();
export type BarcodeScanner = scanner.BarcodeScanner;
export type ScanOptions = scanner.ScanOptions;
export type IosScanOptions = scanner.IOS;
export type AndroidScanOptions = scanner.Android;
export function defaultScanOptions(): ScanOptions {
    return <ScanOptions> {
        formats: "QR_CODE",   // Pass in of you want to restrict scanning to certain types
        cancelLabel: "Close", // iOS only, default 'Close'
        message: "Place the QR Code inside the rectangle to scan it", // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
        showFlipCameraButton: false,   // default false
        preferFrontCamera: false,     // default false
        showTorchButton: true,        // iOS only, default false
        orientation: "portrait",     // Android only, optionally lock the orientation to either "portrait" or "landscape"
        openSettingsIfPermissionWasPreviouslyDenied: true, // On iOS you can send the user to the settings app if access was previously denied,
        resultDisplayDuration: 0
    }
}