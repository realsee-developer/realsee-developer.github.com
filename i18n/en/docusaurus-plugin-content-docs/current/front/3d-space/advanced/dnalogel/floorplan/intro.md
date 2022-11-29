---
title: Instructions
---

::tip **Household Graphic Plugin** is an abstract two-dimensional household map interaction based on a three-dimensional model of the housing source, providing more precise, intuitive household structure, size, direction, weight, door to house information from a two-dimensional perspective.  
:::

**At present, three plug-ins for usage scenarios are abstracted：**

- [PanoFloorplanRadarPlugin] Panorama radar image plugin
- [ModelFloorplanPlugin] Model Household Graph Plugin
- [TopviewFloorplanPlugin] Overview model household image plugin

**Household Graphic Plugins** is complementary to the three-dimensional model of the housing resource, and you can select the appropriate plugin to match actual business demands.

## Dependency Description

:::tip 🌟 **Note that the plugins associated with the household graph are strongly dependent on the household diagram data!!!**🌟
:::

## Function Description

<div style={{display:'flex'}}>
    <img src="https://vrlab-static.ljcdn.com/release/web/temp/floorplanRadar.57b51f71.png" alt="Panorama radar map" width="50%" height="50%" />
    <img src="https://vrlab-static.ljcdn.com/release/web/temp/floorplan.15808fa0.png" alt="Model Household Chart" width="50%" height="50%" />
</div>

There are generally two scenarios for the display of the floor plan：**Radar map**when browsing the panorama of the house source (the left picture above), and **The detailed house plan map**when viewing the 3D model of the house house (the right picture above).

## Plugin Selection

If you want to display the household map in the Property Point Panorama scenario, you can use the[PanoFloorplanRadarPlugin] Panoramist radar image plugin with a similar effect to the left of the above graph.<br/>

There are currently two options for displaying the：plan in the 3D model mode of the house.

- If you have more complex features and want to have more functional support, you can choose [ModelFloorplanPlugin] model household image plugins;
- If the scenario is simpler and wants quick access, you can choose [TopviewFloorplanPlugin] to view the household image plugin.

The effect of both plugins as a whole is similar to the right shown in the graph above. The difference is：

- [ModelFloorplanPlugin] Support switching to model mode automatically when sliding on the household map.Support for more diversified configuration parameters while showing.The switch effect will also be more fluid.
- [TopviewFloorplanPlugin] is able to listen to `Live` instance status changes, auto-display and hidden, no need to display `plugin.show()`and`plugin.hide()` calls.

## Supplementary explanation

The purpose of the household graphs plugin, which is to present in more detail and describe the interaction of household information, is still being refined.

You can refer to the [household description of the use of terms](https://open-platform.realsee.com/developer/docs/front/3d-space/advanced/dnalogel/floorplan/desc/)and we are constantly trying to present the house-like characteristics and information from the three-dimensional and two-dimensional levels.
