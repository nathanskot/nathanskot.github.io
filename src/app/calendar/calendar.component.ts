import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoorService, Door } from '../services/door.service'

@Component({
    selector: 'app-calendar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './calendar.component.html',
    styleUrl: './calendar.component.css'
})
export class CalendarComponent implements OnInit {
    doors: Door[] = [];
    selectedDoor?: Door;

    constructor(private doorService: DoorService) {}

    ngOnInit(): void {
        this.doorService.getDoors().subscribe(data => this.doors = data);
    }

    openDoor(door: Door) {
        this.selectedDoor = door;
    }

    closeDoor() {
        this.selectedDoor = undefined;
    }
}
