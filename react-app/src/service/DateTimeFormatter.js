import React from 'react';
import { format } from 'date-fns';



    export function getCurrentDate() {
        const currentDate = new Date();
        return format(currentDate, 'MMMM dd, yyyy');
      }
      
      export function getCurrentTime() {
        const currentDate = new Date();
        return format(currentDate, 'h:mm:ss a');
      }
      
      export function formatDate(dateInput) {
        const inputDate = new Date(dateInput);
        return format(inputDate, 'MMMM dd, yyyy');
      }
      
      export function formatTime(timeInput) {
        const [hours, minutes, seconds] = timeInput.split(':');
        const inputTime = new Date();
        inputTime.setHours(hours, minutes, seconds);
        return format(inputTime, 'h:mm:ss a');
      }
