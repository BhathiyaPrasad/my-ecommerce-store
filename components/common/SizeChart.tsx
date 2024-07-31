// components/common/Footer.tsx
import React from 'react';
import Link from 'next/link';
import "../Styles/title.css";

const SizeChart = () => (
  <>
  <div className="overflow-x-auto">
  <table className="table">
  {/* head */}
  <thead>
    <tr>
      <th>Size</th>
      <th>Bust (inches)</th>
      <th>Waist (inches)</th>
      <th>Hips (inches)</th>
    </tr>
  </thead>
  <tbody>
    {/* row 1 */}
    <tr>
      <th>UK 6</th>
      <td>31.5</td>
      <td>24.5</td>
      <td>34</td>
    </tr>
    {/* row 2 */}
    <tr>
      <th>UK 8</th>
      <td>33</td>
      <td>26</td>
      <td>35.5</td>
    </tr>
    {/* row 3 */}
    <tr>
      <th>UK 10</th>
      <td>35</td>
      <td>28</td>
      <td>37.5</td>
    </tr>
    {/* row 4 */}
    <tr>
      <th>UK 12</th>
      <td>37</td>
      <td>30</td>
      <td>39.5</td>
    </tr>
    {/* row 5 */}
    <tr>
      <th>UK 14</th>
      <td>39</td>
      <td>32</td>
      <td>41.5</td>
    </tr>
    {/* row 6 */}
    <tr>
      <th>UK 16</th>
      <td>41</td>
      <td>34</td>
      <td>43.5</td>
    </tr>
  </tbody>
</table>

</div>
</>
);

export default SizeChart;
